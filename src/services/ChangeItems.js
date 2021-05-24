const BASE_URL = "https://lib.poas45.ru/";

export async function DeleteItem(type, id) {
  return await fetch(`${BASE_URL}${type}/${id}`,{ method: "DELETE"});
}
export async function EditItem(type, id){
  console.log(id)
}

