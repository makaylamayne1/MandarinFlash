
import "./App.css";
import ChineseWords from "./chinesewords";
import Menu from './menu';


function FirstSet() {
  //a bunch of key value pairs so I can iterate over them
  var learnChinese = {
    happy: "kuài lè",
    reliable: "kě kào",
    are_you_busy: "nǐ máng ma?",
    want: "xiǎng",
    busy: "máng",
    fake: "jiǎ",
    student: "xué shēng",
    hand: "shǒu",
    head: "tóu",
    foot: "jiǎo",
    care: "guān xīn --> to take care about something that concerns you (not person)",
    smart: "cōng míng",
    red: "hóng",
    blue: "lán",
    mall: "shāng chǎng"
  };
 const final= [];

  console.log(Object.keys(learnChinese));
// Expected output: ["name", "age", "occupation", "level"]

for (const [key, value] of Object.entries(learnChinese)) {
  final.push(<ChineseWords chinese={key} english={value}></ChineseWords>)
}

  return (
    <div className="App">
      <header className="App-header">
        <center>
        <Menu name="Makayla">
        </Menu>
        </center>
        <ul>{final}</ul>
      </header>
    </div>
  );
}

export default FirstSet;
