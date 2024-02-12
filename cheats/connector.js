(function () {
  'use strict';

  const floors=[{stairs:{x:792,y:430},rooms:[{"room":105,"x":96,"y":440},{"room":103,"x":204,"y":473},{"room":104,"x":98,"y":682},{"room":102,"x":203,"y":682},{"room":110,"x":370,"y":840},{"room":109,"x":370,"y":957},{"room":111,"x":640,"y":839},{"room":106,"x":774,"y":898},{"room":108,"x":594,"y":1154},{"room":107,"x":715,"y":1119},{"room":113,"x":969,"y":995},{"room":115,"x":1080,"y":1021},{"room":120,"x":1351,"y":829},{"room":119,"x":1356,"y":647},{"room":118,"x":1337,"y":532},{"room":117,"x":1067,"y":517},{"room":116,"x":1065,"y":344},{"room":123,"x":1182,"y":296},{"room":122,"x":1276,"y":87},{"room":121,"x":1531,"y":289},{"room":101,"x":367,"y":616},{"room":112,"x":960,"y":796},{"room":114,"x":1080,"y":806},{"room":450,"x":935,"y":607},{"room":458,"x":1526,"y":402},{"room":462,"x":1144,"y":644},{"room":451,"x":836,"y":1127},{"room":461,"x":439,"y":779}],points:[{"xpos":18,"ypos":17,"x":1232,"y":827},{"xpos":18,"ypos":18,"x":1240,"y":734},{"xpos":18,"ypos":19,"x":1231,"y":652},{"xpos":18,"ypos":20,"x":1229,"y":531},{"xpos":17,"ypos":21,"x":1250,"y":415},{"xpos":16,"ypos":21,"x":1387,"y":375},{"xpos":16,"ypos":22,"x":1396,"y":293},{"xpos":16,"ypos":23,"x":1384,"y":221},{"xpos":17,"ypos":23,"x":1231,"y":176},{"xpos":19,"ypos":21,"x":1068,"y":400},{"xpos":18,"ypos":21,"x":1211,"y":413},{"xpos":20,"ypos":21,"x":970,"y":415},{"xpos":21,"ypos":20,"x":788,"y":514},{"xpos":20,"ypos":20,"x":939,"y":489},{"xpos":21,"ypos":19,"x":862,"y":561},{"xpos":22,"ypos":20,"x":668,"y":514},{"xpos":0,"ypos":0,"x":668,"y":514},{"xpos":23,"ypos":20,"x":529,"y":516},{"xpos":23,"ypos":19,"x":494,"y":657},{"xpos":24,"ypos":19,"x":371,"y":675},{"xpos":25,"ypos":19,"x":315,"y":666},{"xpos":25,"ypos":20,"x":292,"y":576},{"xpos":26,"ypos":20,"x":198,"y":558},{"xpos":27,"ypos":20,"x":94,"y":560},{"xpos":23,"ypos":18,"x":493,"y":696},{"xpos":23,"ypos":17,"x":526,"y":772},{"xpos":22,"ypos":17,"x":771,"y":783},{"xpos":21,"ypos":17,"x":824,"y":794},{"xpos":21,"ypos":16,"x":850,"y":881},{"xpos":21,"ypos":14,"x":819,"y":1021},{"xpos":22,"ypos":14,"x":711,"y":1028},{"xpos":23,"ypos":14,"x":594,"y":1029},{"xpos":24,"ypos":14,"x":533,"y":1021},{"xpos":24,"ypos":15,"x":511,"y":954},{"xpos":24,"ypos":16,"x":510,"y":842},{"xpos":21,"ypos":15,"x":850,"y":916},{"xpos":20,"ypos":16,"x":971,"y":895},{"xpos":19,"ypos":16,"x":1083,"y":896},{"xpos":18,"ypos":16,"x":1219,"y":884}]},{stairs:{x:792,y:430},rooms:[{"room":201,"x":363,"y":618},{"room":203,"x":200,"y":486},{"room":202,"x":200,"y":655},{"room":205,"x":95,"y":475},{"room":204,"x":95,"y":661},{"room":210,"x":410,"y":836},{"room":209,"x":411,"y":954},{"room":211,"x":598,"y":838},{"room":206,"x":771,"y":895},{"room":208,"x":592,"y":1141},{"room":207,"x":710,"y":1163},{"room":213,"x":968,"y":1039},{"room":215,"x":1078,"y":1021},{"room":214,"x":1076,"y":821},{"room":212,"x":967,"y":821},{"room":216,"x":1357,"y":839},{"room":220,"x":1357,"y":644},{"room":219,"x":1357,"y":529},{"room":218,"x":1066,"y":485},{"room":217,"x":1064,"y":343},{"room":223,"x":1194,"y":270},{"room":222,"x":1271,"y":109},{"room":221,"x":1501,"y":292},{"room":463,"x":435,"y":769},{"room":460,"x":944,"y":610},{"room":465,"x":1529,"y":396},{"room":455,"x":1116,"y":651},{"room":453,"x":1232,"y":773},{"room":456,"x":815,"y":1165}],points:[{"xpos":42,"ypos":20,"x":664,"y":506},{"xpos":0,"ypos":0,"x":664,"y":506},{"xpos":41,"ypos":20,"x":789,"y":509},{"xpos":41,"ypos":19,"x":862,"y":558},{"xpos":40,"ypos":21,"x":963,"y":414},{"xpos":40,"ypos":20,"x":941,"y":495},{"xpos":43,"ypos":20,"x":534,"y":506},{"xpos":39,"ypos":21,"x":1067,"y":401},{"xpos":38,"ypos":21,"x":1219,"y":423},{"xpos":36,"ypos":21,"x":1384,"y":382},{"xpos":36,"ypos":22,"x":1399,"y":295},{"xpos":36,"ypos":23,"x":1367,"y":196},{"xpos":37,"ypos":23,"x":1226,"y":180},{"xpos":37,"ypos":21,"x":1250,"y":422},{"xpos":38,"ypos":20,"x":1231,"y":526},{"xpos":38,"ypos":19,"x":1231,"y":644},{"xpos":43,"ypos":19,"x":495,"y":658},{"xpos":44,"ypos":19,"x":368,"y":678},{"xpos":45,"ypos":19,"x":315,"y":665},{"xpos":45,"ypos":20,"x":290,"y":574},{"xpos":46,"ypos":20,"x":199,"y":563},{"xpos":47,"ypos":20,"x":92,"y":561},{"xpos":43,"ypos":18,"x":495,"y":698},{"xpos":43,"ypos":17,"x":525,"y":772},{"xpos":42,"ypos":17,"x":770,"y":780},{"xpos":41,"ypos":17,"x":823,"y":797},{"xpos":41,"ypos":14,"x":821,"y":1046},{"xpos":42,"ypos":14,"x":711,"y":1059},{"xpos":43,"ypos":14,"x":594,"y":1057},{"xpos":44,"ypos":14,"x":525,"y":1048},{"xpos":44,"ypos":15,"x":507,"y":955},{"xpos":44,"ypos":16,"x":506,"y":842},{"xpos":41,"ypos":15,"x":847,"y":954},{"xpos":40,"ypos":16,"x":968,"y":931},{"xpos":39,"ypos":16,"x":1074,"y":932},{"xpos":38,"ypos":16,"x":1221,"y":909},{"xpos":38,"ypos":17,"x":1230,"y":844},{"xpos":41,"ypos":16,"x":844,"y":906}]},{stairs:{x:415,y:199},rooms:[{"room":308,"x":613,"y":102},{"room":309,"x":613,"y":270},{"room":301,"x":81,"y":339},{"room":307,"x":278,"y":657},{"room":303,"x":454,"y":627},{"room":306,"x":542,"y":600},{"room":305,"x":540,"y":492},{"room":304,"x":458,"y":465},{"room":302,"x":322,"y":529},{"room":457,"x":524,"y":335},{"room":464,"x":365,"y":674}],points:[{"xpos":60,"ypos":20,"x":520,"y":231},{"xpos":61,"ypos":20,"x":406,"y":256},{"xpos":61,"ypos":19,"x":459,"y":293},{"xpos":62,"ypos":20,"x":307,"y":254},{"xpos":0,"ypos":0,"x":307,"y":254},{"xpos":63,"ypos":20,"x":196,"y":247},{"xpos":63,"ypos":19,"x":190,"y":370},{"xpos":64,"ypos":19,"x":86,"y":384},{"xpos":63,"ypos":18,"x":188,"y":396},{"xpos":63,"ypos":17,"x":200,"y":443},{"xpos":62,"ypos":17,"x":318,"y":459},{"xpos":61,"ypos":17,"x":366,"y":477},{"xpos":60,"ypos":21,"x":539,"y":179},{"xpos":59,"ypos":21,"x":616,"y":172},{"xpos":61,"ypos":14,"x":357,"y":581},{"xpos":62,"ypos":14,"x":281,"y":594},{"xpos":63,"ypos":14,"x":209,"y":593},{"xpos":61,"ypos":15,"x":374,"y":554},{"xpos":60,"ypos":16,"x":458,"y":535},{"xpos":59,"ypos":16,"x":537,"y":535},{"xpos":61,"ypos":16,"x":374,"y":521}]}];

  function deepArrayEquals(a,b){if(a===b){return true}if(a==null||b==null||a.length!==b.length){return false}for(let i=0;i<a.length;i++){if(Array.isArray(a[i])&&Array.isArray(b[i])){if(!deepArrayEquals(a[i],b[i])){return false}}else if(typeof a[i]==="object"&&typeof b[i]==="object"){if(!deepObjectEquals(a[i],b[i])){return false}}else if(a[i]!==b[i]){return false}}return true}function deepObjectEquals(obj1,obj2){const keys1=Object.keys(obj1);const keys2=Object.keys(obj2);if(keys1.length!==keys2.length){return false}for(const key of keys1){const val1=obj1[key];const val2=obj2[key];const areObjects=isObject(val1)&&isObject(val2);if(areObjects&&!deepObjectEquals(val1,val2)||!areObjects&&val1!==val2){return false}}return true}function isObject(object){return object!=null&&typeof object==="object"}function isEqual(a,b){if(!Array.isArray(a)&&!Array.isArray(b)&&typeof a!=="object"&&typeof b!=="object"){return a===b}else {return deepArrayEquals(a,b)}}

  var collectionClone = clone;

  /*
    Deep clones all properties except functions

    var arr = [1, 2, 3];
    var subObj = {aa: 1};
    var obj = {a: 3, b: 5, c: arr, d: subObj};
    var objClone = clone(obj);
    arr.push(4);
    subObj.bb = 2;
    obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}
    objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
  */

  function clone(obj) {
    let result = obj;
    var type = {}.toString.call(obj).slice(8, -1);
    if (type == 'Set') {
      return new Set([...obj].map(value => clone(value)));
    }
    if (type == 'Map') {
      return new Map([...obj].map(kv => [clone(kv[0]), clone(kv[1])]));
    }
    if (type == 'Date') {
      return new Date(obj.getTime());
    }
    if (type == 'RegExp') {
      return RegExp(obj.source, getRegExpFlags(obj));
    }
    if (type == 'Array' || type == 'Object') {
      result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        // include prototype properties
        result[key] = clone(obj[key]);
      }
    }
    // primitives and non-supported objects (e.g. functions) land here
    return result;
  }

  function getRegExpFlags(regExp) {
    if (typeof regExp.source.flags == 'string') {
      return regExp.source.flags;
    } else {
      var flags = [];
      regExp.global && flags.push('g');
      regExp.ignoreCase && flags.push('i');
      regExp.multiline && flags.push('m');
      regExp.sticky && flags.push('y');
      regExp.unicode && flags.push('u');
      return flags.join('');
    }
  }

  const monitoring=new Map;const cache=new Map;setInterval(()=>{for(const[name,callbacks]of monitoring){const value=window[name];if(!isEqual(value,cache.get(name))){cache.set(name,collectionClone(value));for(const callback of callbacks){callback();}}}},10);function onPropertyChange(name,callback){const callbacks=monitoring.get(name)||new Set;callbacks.add(callback);monitoring.set(name,callbacks);}

  var Key_enum = {};

  (function (exports) {
  	Object.defineProperty(exports, "__esModule", { value: true });
  	(function (Key) {
  	    Key[Key["Backspace"] = 8] = "Backspace";
  	    Key[Key["Tab"] = 9] = "Tab";
  	    Key[Key["Enter"] = 13] = "Enter";
  	    Key[Key["Shift"] = 16] = "Shift";
  	    Key[Key["Ctrl"] = 17] = "Ctrl";
  	    Key[Key["Alt"] = 18] = "Alt";
  	    Key[Key["PauseBreak"] = 19] = "PauseBreak";
  	    Key[Key["CapsLock"] = 20] = "CapsLock";
  	    Key[Key["Escape"] = 27] = "Escape";
  	    Key[Key["Space"] = 32] = "Space";
  	    Key[Key["PageUp"] = 33] = "PageUp";
  	    Key[Key["PageDown"] = 34] = "PageDown";
  	    Key[Key["End"] = 35] = "End";
  	    Key[Key["Home"] = 36] = "Home";
  	    Key[Key["LeftArrow"] = 37] = "LeftArrow";
  	    Key[Key["UpArrow"] = 38] = "UpArrow";
  	    Key[Key["RightArrow"] = 39] = "RightArrow";
  	    Key[Key["DownArrow"] = 40] = "DownArrow";
  	    Key[Key["Insert"] = 45] = "Insert";
  	    Key[Key["Delete"] = 46] = "Delete";
  	    Key[Key["Zero"] = 48] = "Zero";
  	    Key[Key["ClosedParen"] = 48] = "ClosedParen";
  	    Key[Key["One"] = 49] = "One";
  	    Key[Key["ExclamationMark"] = 49] = "ExclamationMark";
  	    Key[Key["Two"] = 50] = "Two";
  	    Key[Key["AtSign"] = 50] = "AtSign";
  	    Key[Key["Three"] = 51] = "Three";
  	    Key[Key["PoundSign"] = 51] = "PoundSign";
  	    Key[Key["Hash"] = 51] = "Hash";
  	    Key[Key["Four"] = 52] = "Four";
  	    Key[Key["DollarSign"] = 52] = "DollarSign";
  	    Key[Key["Five"] = 53] = "Five";
  	    Key[Key["PercentSign"] = 53] = "PercentSign";
  	    Key[Key["Six"] = 54] = "Six";
  	    Key[Key["Caret"] = 54] = "Caret";
  	    Key[Key["Hat"] = 54] = "Hat";
  	    Key[Key["Seven"] = 55] = "Seven";
  	    Key[Key["Ampersand"] = 55] = "Ampersand";
  	    Key[Key["Eight"] = 56] = "Eight";
  	    Key[Key["Star"] = 56] = "Star";
  	    Key[Key["Asterik"] = 56] = "Asterik";
  	    Key[Key["Nine"] = 57] = "Nine";
  	    Key[Key["OpenParen"] = 57] = "OpenParen";
  	    Key[Key["A"] = 65] = "A";
  	    Key[Key["B"] = 66] = "B";
  	    Key[Key["C"] = 67] = "C";
  	    Key[Key["D"] = 68] = "D";
  	    Key[Key["E"] = 69] = "E";
  	    Key[Key["F"] = 70] = "F";
  	    Key[Key["G"] = 71] = "G";
  	    Key[Key["H"] = 72] = "H";
  	    Key[Key["I"] = 73] = "I";
  	    Key[Key["J"] = 74] = "J";
  	    Key[Key["K"] = 75] = "K";
  	    Key[Key["L"] = 76] = "L";
  	    Key[Key["M"] = 77] = "M";
  	    Key[Key["N"] = 78] = "N";
  	    Key[Key["O"] = 79] = "O";
  	    Key[Key["P"] = 80] = "P";
  	    Key[Key["Q"] = 81] = "Q";
  	    Key[Key["R"] = 82] = "R";
  	    Key[Key["S"] = 83] = "S";
  	    Key[Key["T"] = 84] = "T";
  	    Key[Key["U"] = 85] = "U";
  	    Key[Key["V"] = 86] = "V";
  	    Key[Key["W"] = 87] = "W";
  	    Key[Key["X"] = 88] = "X";
  	    Key[Key["Y"] = 89] = "Y";
  	    Key[Key["Z"] = 90] = "Z";
  	    Key[Key["LeftWindowKey"] = 91] = "LeftWindowKey";
  	    Key[Key["RightWindowKey"] = 92] = "RightWindowKey";
  	    Key[Key["SelectKey"] = 93] = "SelectKey";
  	    Key[Key["Numpad0"] = 96] = "Numpad0";
  	    Key[Key["Numpad1"] = 97] = "Numpad1";
  	    Key[Key["Numpad2"] = 98] = "Numpad2";
  	    Key[Key["Numpad3"] = 99] = "Numpad3";
  	    Key[Key["Numpad4"] = 100] = "Numpad4";
  	    Key[Key["Numpad5"] = 101] = "Numpad5";
  	    Key[Key["Numpad6"] = 102] = "Numpad6";
  	    Key[Key["Numpad7"] = 103] = "Numpad7";
  	    Key[Key["Numpad8"] = 104] = "Numpad8";
  	    Key[Key["Numpad9"] = 105] = "Numpad9";
  	    Key[Key["Multiply"] = 106] = "Multiply";
  	    Key[Key["Add"] = 107] = "Add";
  	    Key[Key["Subtract"] = 109] = "Subtract";
  	    Key[Key["DecimalPoint"] = 110] = "DecimalPoint";
  	    Key[Key["Divide"] = 111] = "Divide";
  	    Key[Key["F1"] = 112] = "F1";
  	    Key[Key["F2"] = 113] = "F2";
  	    Key[Key["F3"] = 114] = "F3";
  	    Key[Key["F4"] = 115] = "F4";
  	    Key[Key["F5"] = 116] = "F5";
  	    Key[Key["F6"] = 117] = "F6";
  	    Key[Key["F7"] = 118] = "F7";
  	    Key[Key["F8"] = 119] = "F8";
  	    Key[Key["F9"] = 120] = "F9";
  	    Key[Key["F10"] = 121] = "F10";
  	    Key[Key["F11"] = 122] = "F11";
  	    Key[Key["F12"] = 123] = "F12";
  	    Key[Key["NumLock"] = 144] = "NumLock";
  	    Key[Key["ScrollLock"] = 145] = "ScrollLock";
  	    Key[Key["SemiColon"] = 186] = "SemiColon";
  	    Key[Key["Equals"] = 187] = "Equals";
  	    Key[Key["Comma"] = 188] = "Comma";
  	    Key[Key["Dash"] = 189] = "Dash";
  	    Key[Key["Period"] = 190] = "Period";
  	    Key[Key["UnderScore"] = 189] = "UnderScore";
  	    Key[Key["PlusSign"] = 187] = "PlusSign";
  	    Key[Key["ForwardSlash"] = 191] = "ForwardSlash";
  	    Key[Key["Tilde"] = 192] = "Tilde";
  	    Key[Key["GraveAccent"] = 192] = "GraveAccent";
  	    Key[Key["OpenBracket"] = 219] = "OpenBracket";
  	    Key[Key["ClosedBracket"] = 221] = "ClosedBracket";
  	    Key[Key["Quote"] = 222] = "Quote";
  	})(exports.Key || (exports.Key = {})); 
  } (Key_enum));

  function initRadar(){try{const radar=document.createElement("div");const map=document.createElement("img");radar.id="radar-map";radar.style.pointerEvents="none";radar.style.position="relative";radar.style.top="0px";radar.style.zIndex="1000";document.body.appendChild(radar);radar.appendChild(map);map.style.width="100%";const maya=document.createElement("div");const jimmy=document.createElement("div");const mayaImg=document.createElement("img");const jimmyImg=document.createElement("img");mayaImg.src="cheats/assets/maya.png";jimmyImg.src="cheats/assets/jimmy.png";const mayaDirImg=document.createElement("img");const jimmyDirImg=document.createElement("img");mayaDirImg.src="cheats/assets/view-direction.png";jimmyDirImg.src="cheats/assets/view-direction.png";[mayaImg,jimmyImg].forEach(img=>{Object.assign(img.style,{width:"100%",height:"auto"});});[mayaDirImg,jimmyDirImg].forEach(element=>{Object.assign(element.style,{transition:"transform 1s"});element.className="view-direction";});maya.appendChild(mayaImg);maya.appendChild(mayaDirImg);jimmy.appendChild(jimmyDirImg);jimmy.appendChild(jimmyImg);radar.appendChild(maya);radar.appendChild(jimmy);const imgsContainers=[maya,jimmy];imgsContainers.forEach(container=>{Object.assign(container.style,{position:"absolute",top:"-999px",left:"-999px",zIndex:"1001",transform:"translate(-50%, -50%)",transition:"left 1s, top 1s"});});const jimmysFloor=document.createElement("div");jimmysFloor.id="jimmys-floor";const jimmysFloorIcon=document.createElement("img");const jimmysFloorSpan=document.createElement("span");jimmysFloorIcon.src="cheats/assets/jimmys-floor.png";jimmysFloorIcon.style.height="25px";jimmysFloorSpan.innerText="0";Object.assign(jimmysFloor.style,{display:"none",alignItems:"center",gap:"8px",position:"absolute",right:"0px",bottom:"0px",font:"bold 24px sans-serif"});jimmysFloor.append(jimmysFloorIcon);jimmysFloor.append(jimmysFloorSpan);radar.append(jimmysFloor);const friends=[];const createFriends=()=>{for(let i=0;i<5;i++){const friend=document.createElement("div");const friendImg=document.createElement("img");friendImg.src="cheats/assets/maya-friend.svg";Object.assign(friendImg.style,{opacity:"0.75",width:"100%",height:"100%"});Object.assign(friend.style,{position:"absolute",top:"-999px",left:"-999px",zIndex:"1001",transform:"translate(-50%, -50%)"});friend.appendChild(friendImg);radar.appendChild(friend);friend.className="friend";friends.push(friend);}};createFriends();const changeFloors=()=>{moveFriends();if(window.floor>=2){map.src=`cheats/assets/map/floor-${window.floor-1}.png`;radar.style.display="block";if(window.floor!==window.jhfloor){jimmy.style.display="none";jimmysFloor.style.display="flex";jimmysFloorSpan.innerText=window.jhfloor===5||window.jhfloor===0?"--":String(window.jhfloor-1);}else {jimmy.style.display="block";jimmysFloor.style.display="none";}}else {radar.style.display="none";}};const moveCharacter=(character,xpos,ypos,dir,speed)=>{const floorMap=floors[window.floor-2];if(!floorMap){return}const point=xpos==="stairs"||ypos==="stairs"?floorMap.stairs:floorMap.points.find(point=>point.xpos===xpos&&point.ypos===ypos);if(!point){console.error("Couldn't find point with coordinates"+`${xpos},${ypos}`);character.style.transition="left 0s, top 0s";character.style.left="-999px";character.style.top="-999px";return}else {const{x,y}=calculatePosition(point.x,point.y);const isOutOfMap=character.style.left==="-999px";if(!isOutOfMap){character.style.transition=`left ${speed}, top ${speed}`;}else {character.style.transition="left 0s, top 0s";}character.style.left=`${x}px`;character.style.top=`${y}px`;const viewDirectionDir={"N":90,"E":180,"W":0,"S":-90}[dir];const dirAngle=character.querySelector(".view-direction");if(dirAngle)dirAngle.style.transform=`translate(-50%, -50%) rotate(${viewDirectionDir}deg)`;if(isOutOfMap){setTimeout(()=>character.style.transition=`left ${speed}, top ${speed}`,5);}}};const moveMaya=(skipTransition=false)=>{const floorMap=floors[window.floor-2];if(!floorMap){return}if(window.inroom===0){if(window.stairs===2){moveCharacter(maya,"stairs","stairs","N",skipTransition?"0s":"1s");}else {const xpos=window.pos[0];const ypos=window.pos[1];const dir=window.pos[2];moveCharacter(maya,xpos,ypos,dir,skipTransition?"0s":"1s");}}else {const room=floorMap.rooms.find(({room})=>room===window.inroom);if(!room)return;const{x,y}=calculatePosition(room.x,room.y);maya.style.left=`${x}px`;maya.style.top=`${y}px`;}};const moveJimmy=(skipTransition=false)=>{const floorMap=floors[window.floor-2];if(!floorMap){return}if(window.jhinroom===0){const xpos=Number(window.jmop[0].slice(0,2));const ypos=Number(window.jmop[0].slice(2,4));const dir=window.jmop[1];moveCharacter(jimmy,xpos,ypos,dir,skipTransition?"0s":"0.5s");}else {const room=floorMap.rooms.find(({room})=>room===window.jhinroom);if(!room)return;const{x,y}=calculatePosition(room.x,room.y);jimmy.style.left=`${x}px`;jimmy.style.top=`${y}px`;}};const moveFriends=()=>{const floorMap=floors[window.floor-2];if(!floorMap){return}const guestRooms=window.guestrooms.filter((_,index)=>window.guestsin[index]===1).filter(room=>floorMap.rooms.some(r=>r.room===room)).map(room=>floorMap.rooms.find(r=>r.room===room));friends.forEach(friend=>{Object.assign(friend.style,{left:"-999px",top:"-999px"});});guestRooms.forEach((friendRoom,index)=>{const friendElement=friends[index];const{x,y}=calculatePosition(friendRoom.x,friendRoom.y);friendElement.style.left=`${x}px`;friendElement.style.top=`${y}px`;});};let currentRadarScale="mini";const scaleRadar=level=>{if(window.floor<2)return;currentRadarScale=level;jimmy.style.transition="left 0s, top 0s";maya.style.transition="left 0s, top 0s";setTimeout(()=>{if(level==="full"){radar.style.display="block";radar.style.width="auto";radar.style.height=window.innerHeight*.8+"px";radar.style.left="50%";radar.style.top=window.innerHeight*.5+"px";radar.style.transform="translate(-50%, -50%)";map.style.position="absolute";map.style.width="auto";map.style.height="100%";map.style.left="50%";map.style.transform="translateX(-50%)";maya.style.width="auto";maya.style.height="5%";[mayaImg,jimmyImg].forEach(img=>{Object.assign(img.style,{width:"auto",height:"100%"});});[mayaDirImg,jimmyDirImg].forEach(element=>{Object.assign(element.style,{position:"absolute",top:"50%",left:"50%",width:"auto",height:"200%",transform:"translate(-50%, -50%)"});});jimmy.style.width="auto";jimmy.style.height="5%";friends.forEach(friend=>{Object.assign(friend.style,{width:"auto",height:"5%"});});moveMaya(true);moveJimmy(true);moveFriends();}else if(level==="mini"){radar.style.display="block";radar.style.width="300px";radar.style.height="auto";radar.style.left="200px";radar.style.top="0px";radar.style.transform="";map.style.position="static";map.style.width="100%";map.style.height="auto";map.style.left="";map.style.transform="";maya.style.width="5%";maya.style.height="auto";[mayaImg,jimmyImg].forEach(img=>{Object.assign(img.style,{width:"100%",height:"auto"});});[mayaDirImg,jimmyDirImg].forEach(element=>{Object.assign(element.style,{position:"absolute",top:"50%",left:"50%",width:"200%",height:"auto",transform:"translate(-50%, -50%)"});});jimmy.style.width="5%";jimmy.style.height="auto";friends.forEach(friend=>{Object.assign(friend.style,{width:"5%",height:"auto"});});moveMaya(true);moveJimmy(true);moveFriends();}else if(level==="hide"){radar.style.display="none";}},1);};const checkIfJimmyInRoomWithMaya=()=>{if(window.inroom!==0&&window.jhinroom===window.inroom){maya.style.opacity="0.1";}else {maya.style.opacity="1";}};onPropertyChange("menon",()=>{if(window.menon===0){scaleRadar("mini");}else {scaleRadar("hide");}});const calculatePosition=(x,y)=>{const mapLeft=(radar.offsetWidth-map.offsetWidth)/2;const mapTop=(radar.offsetHeight-map.offsetHeight)/2;const mapWidth=map.clientWidth;const mapHeight=map.clientHeight;const imageWidth=map.naturalWidth;const imageHeight=map.naturalHeight;const scaledX=x*mapWidth/imageWidth;const scaledY=y*mapHeight/imageHeight;return {x:scaledX+mapLeft,y:scaledY+mapTop}};onPropertyChange("floor",()=>{changeFloors();});onPropertyChange("jhfloor",()=>{changeFloors();});onPropertyChange("inroom",()=>{moveMaya();checkIfJimmyInRoomWithMaya();});onPropertyChange("jhinroom",()=>{moveJimmy();checkIfJimmyInRoomWithMaya();});onPropertyChange("pos",()=>{moveMaya();});onPropertyChange("jmop",()=>{moveJimmy();});onPropertyChange("stairs",()=>{moveMaya();});changeFloors();document.addEventListener("keydown",event=>{if(event.which===Key_enum.Key.Equals){if(currentRadarScale==="hide"){scaleRadar("mini");}else if(currentRadarScale==="mini"){scaleRadar("full");}}else if(event.which===Key_enum.Key.Dash){if(currentRadarScale==="full"){scaleRadar("mini");}else if(currentRadarScale==="mini"){scaleRadar("hide");}}});}catch(e){console.error(e.message);}}

  function _define_property(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}));}ownKeys.forEach(function(key){_define_property(target,key,source[key]);});}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});}keys.push.apply(keys,symbols);}return keys}function _object_spread_props(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else {ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target}function getItemsList(){return Array(Math.ceil(window.itemlist.length/3)).fill(null).map((_,index)=>index*3).map(begin=>window.itemlist.slice(begin,begin+3)).map((itemListItem,itemListItemIndex)=>{var _item_n,_item_a,_item_a1,_item_a2,_item_a3;const[inventorySlot,code,item]=itemListItem;return _object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread({index:itemListItemIndex,code,obtained:inventorySlot>0},inventorySlot>0&&{inventorySlot}),{type:{1:"item",2:"event",3:"ghost_answer",4:"key",5:"scrying_mirror",6:"compass"}[item["t"]],name:(_item_n=item["n"])===null||_item_n===void 0?void 0:_item_n[0]}),item["t"]===4&&{keyForRoom:item["o"]}),{answers:{Amy:((_item_a=item["a"])===null||_item_a===void 0?void 0:_item_a[0])===1,DrBose:((_item_a1=item["a"])===null||_item_a1===void 0?void 0:_item_a1[0])===1,Harvey:((_item_a2=item["a"])===null||_item_a2===void 0?void 0:_item_a2[0])===1,Rose:((_item_a3=item["a"])===null||_item_a3===void 0?void 0:_item_a3[0])===1}}),item["rp"]&&{locatedIn:item["rp"]})})}

  function initItemsList(){try{const itemsListContainer=document.createElement("div");const list=document.createElement("div");list.id="items-list";Object.assign(list.style,{display:"flex",flexDirection:"row",gap:"16px"});Object.assign(itemsListContainer.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"1152px",height:"750px",background:"rgba(0, 0, 0, 0.8)",padding:"32px",color:"#fff",font:"19px subs",zIndex:1001,letterSpacing:"normal",display:"none",pointerEvents:"none",overflow:"hidden",boxSizing:"border-box"});itemsListContainer.id="items-list-container";itemsListContainer.appendChild(list);document.body.appendChild(itemsListContainer);let itemsListVisible=false;let showing="items";const updateItemsList=()=>{const items=getItemsList().filter(item=>{var _item_locatedIn;return showing==="items"?item.type==="item"||item.type==="scrying_mirror"||item.type==="compass":item.type==="key"&&!item.code.startsWith("GUEST")&&((_item_locatedIn=item.locatedIn)===null||_item_locatedIn===void 0?void 0:_item_locatedIn[0])&&item.locatedIn[0]>0});const leftTableRows=createTable(items.slice(0,19));const hint1=document.createElement("div");const hintStyle={fontWeight:"bold",marginTop:"4px",padding:"4px 6px",background:"#fff",color:"#000",textShadow:"none"};Object.assign(hint1.style,hintStyle);hint1.innerHTML='<td colspan="3">Press E to hide this list</td>';const hint2=document.createElement("div");Object.assign(hint2.style,hintStyle);hint2.innerHTML=`<td colspan="3">Press K to ${showing==="items"?"show keys":"show items"}</td>`;const hints=document.createElement("tr");Object.assign(hints.style,{display:"flex",flexDirection:"row",gap:"4px"});hints.append(hint1,hint2);const leftTable=document.createElement("table");leftTable.style.borderCollapse="collapse";leftTable.append(...leftTableRows,hints);const rightTableRows=createTable(items.slice(19));const rightTable=document.createElement("table");rightTable.style.borderCollapse="collapse";rightTable.append(...rightTableRows);const divider=document.createElement("div");Object.assign(divider.style,{height:"690px",width:"1px",background:"#ccc"});list.append(leftTable,divider,rightTable);};const createTable=rowsData=>{const rows=[];const header=document.createElement("tr");header.innerHTML='<th align="left">Item</th><th align="left">Location room №</th>';Object.assign(header.style,{paddingBottom:"8px",borderBottom:"1px solid #fff"});rows.push(header);for(const item of rowsData){var _item_locatedIn;const listItem=document.createElement("tr");if(item.obtained){listItem.style.color="#9c9c9c";}let itemImg;if(item.type==="item")itemImg=`media/gfx/IP/I-${item.index}.png`;if(item.type==="key")itemImg="media/gfx/IP/I-KEY.png";else if(item.type==="compass")itemImg="media/gfx/ColCompA.png";else if(item.type==="scrying_mirror")itemImg="media/gfx/ColMirror.png";const itemStyles="vertical-align: middle; margin-right: 6px;";const spanStyle=item.obtained?"text-decoration: line-through;":"";var _item_name,_item_locatedIn_;listItem.innerHTML=`<td><img src="${itemImg}" width="32" style="${itemStyles}" /><span style="${spanStyle}">${(_item_name=item.name)!==null&&_item_name!==void 0?_item_name:`Key for room №${item.keyForRoom}`}</span?</td><td>${item.obtained?"-":(_item_locatedIn_=(_item_locatedIn=item.locatedIn)===null||_item_locatedIn===void 0?void 0:_item_locatedIn[0])!==null&&_item_locatedIn_!==void 0?_item_locatedIn_:""}</td>`;rows.push(listItem);}const placeholderRows=rows.length<19?new Array(19-rows.length).fill(null).map(()=>{const placeholderRow=document.createElement("tr");placeholderRow.innerHTML="<td>&nbsp;</td><td>&nbsp;</td>";placeholderRow.style.height="34px";return placeholderRow}):[];return rows.concat(...placeholderRows)};const showHideItemsList=()=>{if(itemsListVisible){itemsListContainer.style.display="none";list.innerHTML="";}else {updateItemsList();itemsListContainer.style.display="block";}itemsListVisible=!itemsListVisible;};document.addEventListener("keydown",event=>{if(event.which===Key_enum.Key.E){showHideItemsList();}else if(event.which===Key_enum.Key.K&&itemsListVisible){showing=showing==="items"?"keys":"items";list.innerHTML="";updateItemsList();}});}catch(e){console.error(e);}}

  initRadar();initItemsList();

})();
