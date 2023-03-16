const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared laughed, then :insertz:. Tim saw something— :insertx: weighs 300 pounds, and it was a hot day';
const insertX = ['James', 'Dean', 'Charles'];
const insertY = ['the Attic', 'Razzmatazz', 'a starbucks parkinglot'];
const insertZ = ['read a book', 'knitted', 'drank a tall boy'];




randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Tim', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32)*5/9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
}


  story.textContent = newStory;
  story.style.visibility = 'visible';
}