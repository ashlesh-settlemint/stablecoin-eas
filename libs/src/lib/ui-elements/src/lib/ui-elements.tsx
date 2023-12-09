import styles from './ui-elements.module.css';

/* eslint-disable-next-line */
export interface UiElementsProps {}

export function UiElements(props: UiElementsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiElements!</h1>
    </div>
  );
}

export default UiElements;
