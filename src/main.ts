import './style.scss'
import { consoleWelcomeMessage } from './scripts/console';
import { sayHello } from './scripts/welcome/hello';
import { scrollDown } from './scripts/welcome/scroll';
import { scrollSlide } from './scripts/titles';

consoleWelcomeMessage();
sayHello();
scrollSlide();
scrollDown()