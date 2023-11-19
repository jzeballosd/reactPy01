import { useState } from "react"

export function TwitterFollowCard({userName, userId, isFollowing}){
    const [isFollowing_, setIsFollowing] = useState(isFollowing)      

    const ruteImg = `../src/img/${userId}.jpg`

    const handleClick = () => {
        setIsFollowing(!isFollowing_)
    } 

    const textButton = isFollowing_? 'Following' : 'Follow'
    const buttonClassName = isFollowing_? 'tw-followCard-button is-following' :
                                         'tw-followCard-button'
    
    
                                         
    return (
        <article className = "tw-followCard">
        <header className = "tw-followCard-header">
           <img className = "tw-followCard-avatar" alt="Mi Avatar" src={ruteImg}/>
           <div className="tw-followCard-info">
              <strong>
                {userName}
              </strong>
              <span className="tw-followCard-infoUserName">@{userId}</span>
           </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>{textButton}</button>
        </aside>
      </article>
    )
}
