//Home
onEvent("HomeTapToBeginButton", "click", function( ) {
  setScreen("MenuScreen");
});
//Menu
onEvent("BackToHomeButton", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("TakingPerspective", "click", function( ) {
  setScreen("PerspectiveScreen");
});
onEvent("HelpNow!", "click", function( ) {
  setScreen("HelpNowScreen");
});
onEvent("Didyouknow?", "click", function( ) {
  setScreen("DidYouKnowScreen");
});
//Did you know
onEvent("BackToMenuDYKButton", "click", function( ) {
  setScreen("MenuScreen");
});
onEvent("NextdykButton", "click", function( ) {
  setScreen("QuizScreen");
});
//Perspective
onEvent("PerspectiveMenuButton", "click", function( ) {
  setScreen("MenuScreen");
});
onEvent("LearnMoreButton", "click", function( ) {
  open("https://www.worldvision.ca/stories/child-protection/child-labour-shahids-story");
});
