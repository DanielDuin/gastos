export function validarImporte(importe) {
  // Expresión regular para validar un importe (número positivo, con o sin decimales)
  const regex = /^d+(.d{1,2})?$/;

  if (regex.test(importe)) {
    // El importe es válido
    const numero = parseFloat(importe);
    if (numero <= 0) {
      return { estado: -1, mensaje: "El importe debe ser mayor que cero." };
    }
    return { estado: 1, mensaje: "" }; // Indica que no hay error
  } else {
    // El importe no es válido
    return {
      estado: -1,
      mensaje:
        "Formato de importe inválido. Use números con hasta dos decimales (ej. 123.45).",
    };
  }
}
