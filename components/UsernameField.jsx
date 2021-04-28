import styles from '../styles/Home.module.css'


const UsernameField = ({ value, onChange, onSubmit, completed }) => {
    if (completed) {
      // if the user has already claimed a username, display it.
      return (
        <div className={styles.second_bar}>
          You  are  chatting  as  <b className={styles.name}> {value} </b>
        </div>
      );
    } else {
      // if the user hasn't yet claimed a username, let them do so.
      return (
        <div className={styles.second_bar}>
          <form onSubmit={(e) => e.preventDefault() || onSubmit(value)}>
            <label>
              Set your username:
              <input
                type="text"
                name="username"
                value={value}
                onChange={(e) => e.preventDefault() || onChange(e.target.value)}
              />
            </label>
            <input className={styles.top_submit} type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };
  
  export default UsernameField;
  