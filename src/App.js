import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import WatchContext from './context/WatchContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
// Replace your code here
const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: activeMenuConstants.home,
    savedVideosList: [],
    save: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickActiveTab = item => {
    this.setState({activeTab: item})
  }

  addSavedVideo = videoItemDetails => {
    const {savedVideosList} = this.state
    const findVideo = savedVideosList.find(
      each => each.id === videoItemDetails.id,
    )
    if (findVideo) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList],
      }))
    } else {
      this.setState({savedVideosList: [...savedVideosList, videoItemDetails]})
    }
  }

  removeSavedVideo = videoItemDetails => {
    const {savedVideosList} = this.state
    const newSavedVideos = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoItemDetails.id,
    )
    this.setState({savedVideosList: newSavedVideos})
  }

  updateVideo = videoItemDetails => {
    const {save} = this.state
    if (save) {
      this.removeSavedVideo(videoItemDetails)
    } else {
      this.addSavedVideo(videoItemDetails)
    }
  }

  updateSaveVideo = videoItemDetails => {
    this.setState(
      prevState => ({save: !prevState.save}),
      this.updateVideo(videoItemDetails),
    )
  }

  render() {
    const {isDarkTheme, activeTab, savedVideosList, save} = this.state
    return (
      <WatchContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          activeTab,
          onClickActiveTab: this.onClickActiveTab,
          savedVideosList,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
          save,
          updateSaveVideo: this.updateSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}
export default App
