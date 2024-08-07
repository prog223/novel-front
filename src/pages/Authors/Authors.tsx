import { useGetAuthorsQuery } from '../../setup/store/api/author.api';
import styles from './style.module.scss';

const Authors = () => {
   const { data, isLoading } = useGetAuthorsQuery(undefined, {
      refetchOnMountOrArgChange: true,
   });

   console.log(isLoading);
   console.log(data);

   return isLoading ? (
      <div>Loading</div>
   ) : (
      <div className={styles.container}>{data?.data[0].name}</div>
   );
};

export default Authors;
