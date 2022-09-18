import { collection, getDocs, query, where, doc } from "firebase/firestore";
import db from "../firebase/firebaseConfig"; 
import Votter from "./voter";



const obtenerDatos = async(cedula) => {
  //const datos = await getDocs();
  //const q = query(collection(db, 'Usuarios'), where('nombres', '==', cedula));
  //console.log(q.data());
  const q = query(collection(db, 'Usuarios'), where('nombres', '==', cedula));
  const docSnap = await getDocs(q);
  

  let list_votter = [];
  docSnap.forEach((doc) => {
    //console.log(typeof(doc.data()))
    //console.log(doc.data());
    //console.log(doc.data().cedula);
    let v = new Votter(doc.data().cedula, doc.data().nombres, doc.data().contraseña, false);
    list_votter.push(v);
    console.log('votante', v)
  });
  //console.log('3');
  return list_votter;
}

export default obtenerDatos;




//datos.forEach((documento) => {
//  list_votter.push(Votter(documento.data().cedula, documento.data().nombres, documento.data().contraseña, false));
//});




//useEffect(() => {
//    console.log('1');
//
//    const obtenerDatos = async() => {
//      //const datos = await getDocs();
//      console.log('2');
//      const q = query(collection(db, 'Usuarios'), where('nombres', '==', 'Diego'));
//      //console.log(q.data());
//
//      const datos = await getDocs(q);
//      
//      datos.forEach((documento) => {
//        console.log(documento.id, " => ", documento.data());
//      });
//      console.log('3');
//    };
//    
//    obtenerDatos();
//    
//  }, []);

