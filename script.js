var periodoEnigo = document.getElementById("periodo");

function kalkulo() {
  var numero = Number(periodoEnigo.value);

  minutigo = numero * 50;
  
  var horoj = (numero * 50) / 60;
    // console.log(horoj);
  nurHoroj = Math.floor(horoj); //floor = ปัดเศษทิ้ง
  var minutoj = (horoj - nurHoroj); //ลบให้เหลือเพียงเศษ แล้วคูณ 60 เพื่อทำให้เป็นนาที
  nurMinutoj = Math.round(minutoj * 60); //ปัดเศษ
  
  rezulto.innerHTML = minutigo + " นาที<br>" + nurHoroj +" ชั่วโมง "+ nurMinutoj +" นาที";
}