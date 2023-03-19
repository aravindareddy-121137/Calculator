import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
}
const display= document.querySelector("#display");
const buttons= document.querySelector("#buttons");

buttons.forEach(btn) => {
btn.addEventListener("click",() =>{
if(btn.id==="="){
display.value = eval(display.value);
}else if (btn.id === "ac"){
display.value ="";
}else if (btn.id =="de"){
display.value = display.value.slice(0,-1);
}else {
display.value +=btn.id;
}
});
});
