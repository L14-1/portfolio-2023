import './style.scss'
import { sayHello } from './scripts/welcome/hello';
import { scrollDisappearence, cardAppearence, aboutAppearence } from './scripts/welcome/scroll';
import { scrollSlide } from './scripts/titles';

console.log(
  'Hey there ! \n\nYou are a developer, aren\'t you ?\n\nIf you want to see the code, you can find it here: \n\nhttps://github.com/L14-1\n\n%cHave a nice day !',
  'color: #E384FF',
);

sayHello();
scrollDisappearence();
scrollSlide();
cardAppearence();
aboutAppearence();