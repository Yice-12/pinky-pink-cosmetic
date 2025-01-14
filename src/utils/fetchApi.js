import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../db/db";

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
};

export const fecthProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("No existe un producto con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
  }
};
