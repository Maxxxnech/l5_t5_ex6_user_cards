# Пример реализации жизненного цила React 

### Users.js - список карточек пользователей
Загрузка пользователей происходит из {JSON} Placeholder
  https://jsonplaceholder.typicode.com/
Загрузка происходит 
- при монтировании методом **componentDidMount()**
- при обновлении списка вручную методом restoreUsers()
### User.js - карточка пользователя

При удалении пользователя карточка верхнего в списке открывается.
За этим следит метод **componentDidUpdate()** 
```
   componentDidUpdate(prevProps, prevState){
       if(prevState.isOpen !== this.props.defaultOpen){
          this.setState({isOpen: this.props.defaultOpen})
       }
   }
```


