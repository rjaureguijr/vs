### Welcome!

Thanks for taking our coding challenge! We'd like for you to implement a basic event management system using the provided event service API.

The features we are developing could include:

* Display events (event name, date, venue name, city, state) in list/tabular format
* Filter events (by city, or by date)
* Add events

Feel free to take creative liberties and you may use any open source javascript frameworks or libraries you like. We provided you with some HTML (index.html) to start but feel free to make any changes. We also provided you with our event service API (Use "-module" if you need to load modules via a build process, and "-static" if you are importing via script)

Thanks, and enjoy!

### REST API

#### `localhost:8080/events`

| Request type | Desired response | Description
| ------ | ------ | ------ |
| `GET` | `application/json` | Returns JSON with all events in the dataset
| `POST` | `true` | If `POST` request is successful, the object will be added to the dataset and any subsequent successful `GET` calls will contain that new event. Otherwise will return an error message.
| `DELETE` | `true` | If `DELETE` request is successful, the object will be removed from the dataset and any subsequent successful `GET` calls will not contain that specified event. Otherwise will return an error message.
