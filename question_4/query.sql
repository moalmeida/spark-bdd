SELECT C.Nombre
FROM Clientes C
	LEFT JOIN Datos D1 ON C.ClienteID = D1.Cliente AND D1.Variable = 'Genero'
	LEFT JOIN Datos D2 ON C.ClienteID = D2.Cliente AND D2.Variable = 'Ciudad'
	LEFT JOIN Datos D3 ON C.ClienteID = D3.Cliente AND D3.Variable = 'Mascota'
GROUP BY C.ClienteID
HAVING 1=1
	AND (D1.Valor = 'F')
	AND (D2.Valor = 'Bogota')
	AND (D3.Valor = 'Si')
