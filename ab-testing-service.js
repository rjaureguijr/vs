// Do not modify this file

class ABTestingService {
  constructor() {
      this.testMapping = {
          defaultFilterTest: {
              variation_0: {
                  split: 0.5
              },
              variation_1: {
                  split: 0.5
              }
          },
          styleTest: {
              variation_0: {
                  split: 0.5
              },
              variation_1: {
                  split: 0.5
              }
          }
      };
  }

  static simulateNetwork(onSuccess, onError) {
      const latency = Math.random() * 1000; // latency between 0 - 1 second
      const callback = Math.random() <= 0.9 ? onSuccess : onError;
      
      setTimeout(callback, latency);
  }

  static onError(e) {
      console.error(`Error in ABTestingService: ${e}`);
  }

  _initVariation(testKey) {
      const experiment = this.testMapping[testKey];
      const experimentEntries = Object.entries(experiment);
      const thresholdMap = {};
      
      let totalThreshold = 0;

      // create threshold map
      for (const [key, value] of experimentEntries) {
        thresholdMap[key] = { start: totalThreshold }
        totalThreshold += value.split;
        thresholdMap[key]['end'] = totalThreshold;
      }

      // create split value for equal probability amongst variants
      const splitValue = Math.random() * totalThreshold;

      for (const [key] of experimentEntries) {
        const variant = thresholdMap[key];

        if (splitValue >= variant.start && splitValue <= variant.end) {
          this.testMapping[testKey].activatedVariation = key;
          break;
        }
      }

      return this.testMapping[testKey].activatedVariation;
  }

  getVariation(testKey, callback = () => {}) {
      ABTestingService.simulateNetwork(() => {
          const test = this.testMapping[testKey];
          const { activatedVariation } = test;
          if (!!activatedVariation) {
              callback(activatedVariation);
              return;
          }

          callback(this._initVariation(testKey));
      },
      () => {
          ABTestingService.onError('Network Error');
          callback();
      });
  }
}

export default ABTestingService;
