import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost(props) {
  console.log("New props:", props)
    return (
      <div>
        <h1>teste new</h1>
      </div>
    );
  }
  
  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: { }
    }
  });