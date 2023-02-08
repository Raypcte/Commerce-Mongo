db.produtos.insertOne({ nome: "Big Mac" },
{ $currentDate: { ultimaModificacao: true } });

db.produtos.findOne({}, { _id: 0, nome: 1 });