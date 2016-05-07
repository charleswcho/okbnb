# OkBnB

[OkBnb live][heroku]

[heroku]: https://okbnb.herokuapp.com

### Single-Page App



```ruby
class Api::SessionsController < ApplicationController
    def get_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```


![tagscreenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)
