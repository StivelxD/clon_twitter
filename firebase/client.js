import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCznIk1_9ijhnINGpKzpLqSjppCrXV7Opk",
    authDomain: "clontwitter-fecd4.firebaseapp.com",
    projectId: "clontwitter-fecd4",
    storageBucket: "clontwitter-fecd4.appspot.com",
    messagingSenderId: "54740758820",
    appId: "1:54740758820:web:dabaff07fdeea1555383b1",
    measurementId: "G-H3QPYFDP5T"
  };

  !firebase.apps.length && 
    firebase.initializeApp(firebaseConfig)

  const mapUserFromFirebaseAuthToUser = (user) => {
    const {additionalUserInfo} = user
    const {profile, username} = additionalUserInfo
    const {avatar_url, html_url} = profile
    
    return{
      avatar: avatar_url,
      username,
      url:  html_url
    }
  }

  export const onAuthStateChanged = (onChange) => {
    return firebase
      .auth()
      .onAuthStateChanged(user => {
        const normalizedUser =
        mapUserFromFirebaseAuthToUser(user)
        onChange(normalizedUser)
      })
  }

  export const loginWithGitHub = () => {
      const githubProvider = new firebase.auth.GithubAuthProvider()
      return firebase
      .auth()
      .signInWithPopup(githubProvider)
      .then(mapUserFromFirebaseAuthToUser)
  }