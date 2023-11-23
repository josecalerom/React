import {Children, useState} from "react"

export function TwitterFollowCard({children, userName, name, initialIsFollowing}) {
    //El hooksstate nos permite guardar una variable que nos diga si estamos siguiendo o no al usuario 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //La línea de arriba es equivalente a las siguientes:
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    // We can use this to add @ if there were no function formatUsername
    // const addAt = (username) => `@${username}`
    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
      ? "tw-followCard-button is-following"
      : "tw-followCard-button"

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

    return(
        //Podríamos añadir estilos como en la siguiente línea, pero no es lo mejor ni más cómodo
        // <article style={{display: "flex", alignItems: "center", color: "#fff"}}>
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${userName}`}
            alt="El avatar de midudev" />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">@{(userName)}</span>
          </div>
        </header>
        {/* Este es un comentario dentro del retunr*/}
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}