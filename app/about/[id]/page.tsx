const AboutDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>
    AboutDetailsPage
    {id}
  </div>;
};
export default AboutDetailsPage;
