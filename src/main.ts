import { consoleWelcomeMessage } from "./scripts/console";
import { scrollSlide } from "./scripts/titles";
import { sayHello } from "./scripts/welcome/hello";
import { scrollDown } from "./scripts/welcome/scroll";
import { switchTheme } from "./scripts/welcome/switch";
import "./style.scss";

consoleWelcomeMessage();
sayHello();
scrollSlide();
scrollDown();
switchTheme();
