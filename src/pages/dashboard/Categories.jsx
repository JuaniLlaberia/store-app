import Title from '../../components/Title';
import CategoriesTable from '../../features/Categories/CategoriesTable';
import Row from '../../components/Row';
import AddCategory from '../../features/Categories/AddCategory';

const Categories = () => {
  return (
    <>
      <Title as='h2'>Categories</Title>
      <Row>
        <AddCategory />
      </Row>
      <CategoriesTable />
    </>
  );
};

export default Categories;
