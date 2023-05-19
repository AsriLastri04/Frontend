import { useEffect, useState } from "react";
function Counter() {
  /**
   * UseState mengembalikan sepasang value (array) : [0, function()]
   */
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }
  /**
   * UseEffect dijalankan pada lifecycle mount dan update
   */
  function updateDOM() {
    console.log("LifeCycle:Dimount");

    // Melakukan side effect : Mengakses DOM
    document.title = "Hasil : $(angka)";
  }

  useEffect(updateDOM, [angka]);

  console.log("LifeCycle : Dirender");
  return (
    <div>
      <p> Ressult: {angka}</p>
      <button onClick={addAngka}> Add</button>
    </div>
  );
}

export default Counter;
