import {Student} from "./student";
import {WebMission} from "./webMission";
const newton = new WebMission("Newton", "06/01/2020", "20/07/2020", [], []);
newton.createClass("Newton", "06/01/2020", "20/07/2020", [], []);
const amanda = new Student("Amanda", "arm@gmail.com", "01/01/2001", newton);
// amanda.registerStudent("Amanda", "arm@gmail.com", "01/01/2001", newton);