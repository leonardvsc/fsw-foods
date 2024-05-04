import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  // Pegar as categorias do banco de dados
  // Renderizar um item pra cada categoria

  const categories = await db.category.findMany({});

  return (
    <div className="flex gap-3 overflow-hidden overflow-x-scroll py-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
