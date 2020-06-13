if (annyang) {


    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
    'boby *val' : function(val){
        $scope.Todo = val;
        $scope.addTodo();
        $scope.$apply();
        },

   /*'do you like babies' : function(){
        speech.text = "I love babies";
          speechSynthesis.speak(speech);
    },*/
      'are you a*val' : function(val){
          var aya = ["no", "no", "maybe", "yes"];
        speech.text = aya[wordnum];
            speechSynthesis.speak(speech);
          },

             'batman or superman' : function(){
        speech.text = "batman of course";
            speechSynthesis.speak(speech);
          },

             'iron man or captain america' : function(){
        speech.text = "ironman";
            speechSynthesis.speak(speech);
        },

             'who is you favorite DC Superhero' : function(){
        speech.text = "probably batman";
            speechSynthesis.speak(speech);
          },

             'boby' : function(val){
        speech.text = "yes sir";
            speechSynthesis.speak(speech);
          },

             'hello' : function(val){
                 var h = ["hello", "hello", "hey", "hi"];
                speech.text = h[wordnum];
                speechSynthesis.speak(speech);
          },

             'good how about you' : function(val){
                var ghay = ["fine thank you", "fine thank you", "I am OK", "I am not very well thank you"]; 

        speech.text = ghay[wordnum];
            speechSynthesis.speak(speech);
          },

             'how are you' : function(val){
        speech.text = ghay[wordnum];
            speechSynthesis.speak(speech);
          },

             'that\'s good' : function(val){
        speech.text = "yes it is";
            speechSynthesis.speak(speech);
          },

             'what day is it' : function(val){
        speech.text = n;
            speechSynthesis.speak(speech);
          },



          'do you like*val' : function(val){

              var dyl = ["", "yes", "not really", "no"];
              speech.text = dyl[wordnum];
              speechSynthesis.speak(speech);
          },

           'who are you' : function(val){
              speech.text = "I am Maya an artificial in Telegence";
              speechSynthesis.speak(speech);
          },
   'what language are you programmed in' : function(val){
              speech.text = "java script";
              speechSynthesis.speak(speech);
          },

           'what time is it' : function(val){
              speech.text = string[hours-1]+" "+string[min-1];
              speechSynthesis.speak(speech);
          },

           'thank you' : function(val){
              speech.text = "you are welcome";
              speechSynthesis.speak(speech);
          },

           'thanks' : function(val){
              speech.text = "you are most very welcome sir";
              speechSynthesis.speak(speech);
          },

           'Turn off the lights' : function(val){
                speech.text = "sure thing";
                speechSynthesis.speak(speech);
                off();
          },

            'Turn on the lights' : function(val){
                speech.text = "sure thing";
                speechSynthesis.speak(speech);
                on();
          },

             '' : function(val){
              speech.text = "";
              speechSynthesis.speak(speech);
          },

             '' : function(val){
              speech.text = "";
              speechSynthesis.speak(speech);
          },

    }
  // Add our commands to annyang
  annyang.addCommands(commands);
  annyang.debug();
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}