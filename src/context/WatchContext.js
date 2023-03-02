import React from 'react'

const WatchContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  activeTab: 'INITIAL',
  onClickActiveTab: () => {},
  save: false,
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  updateSaveVideo: () => {},
})

export default WatchContext
