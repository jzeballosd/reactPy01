import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="Jesus Zeballos" userId="jesusZeballosD" isFollowing={false}/>
      <TwitterFollowCard userName="Martin Vizcarra Cornejo" userId="mVizcarra" isFollowing/>
      <TwitterFollowCard userName="Vasco Zeballos Q." userId="vascoZeballos" isFollowing/>
    </div>
  )
}

