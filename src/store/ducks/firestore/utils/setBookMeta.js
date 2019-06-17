import { getUser } from '@ducks/firebase/firebaseSelectors';
import { getOrderedBooksMeta } from '../firestoreSelectors';

export default async function setBookMeta(ops) {
  const { bookId, getState, getFirestore, data = {} } = ops;
  const firestore = getFirestore();
  const state = getState();

  const user = getUser(state);
  const booksMeta = getOrderedBooksMeta(state);

  const existedBookMeta = booksMeta.find(bm => {
    const isThisUser = bm.userId === user.id;
    const isThisBook = bm.bookId === bookId;
    return isThisUser && isThisBook;
  });

  const isAlreadyExistThisBookMeta = Boolean(existedBookMeta);

  let result;
  if (isAlreadyExistThisBookMeta) {
    result = await firestore.doc(`booksMeta/${existedBookMeta.id}`).update(data);
  } else {
    result = await firestore.collection('booksMeta').add({
      bookId,
      userId: user.id,
      ...data,
    });
  }

  return result;
}
