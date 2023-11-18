import "./App.css"

export function App(){
    return (
      <article className = "tw-followCard">
        <header className = "tw-followCard-header">
           <img className = "tw-followCard-avatar" alt="Mi Avatar" src="https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170901157/85042129-avatar-joven-hombre-ilustraci%C3%B3n-del-vector-del-car%C3%A1cter-de-dise%C3%B1o.jpg"/>
           <div className="tw-followCard-info">
              <strong>
                Jesus Zeballos
              </strong>
              <span className="tw-followCard-infoUserName">@jZeballosD</span>
           </div>
        </header>
        <aside>
            <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>        
    )
}

