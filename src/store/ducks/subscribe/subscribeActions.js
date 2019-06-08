// import axios from 'axios';
import { createAction } from 'redux-actions';
import * as subscribeTypes from './subscribeTypes';

export const firstAction = createAction(subscribeTypes.FIRST_ACTION);
export const secondAction = createAction(subscribeTypes.SECOND_ACTION);

// export const subscribe = () => async dispatch => {
// <input type="hidden" name="receiver" value="410017674053368" />
//     <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза" />
//     <input type="hidden" name="short-dest" value="Проект «Железный человек»: реактор холодного ядерного синтеза" />
//     <input type="hidden" name="label" value="$order_id" />
//     <input type="hidden" name="quickpay-form" value="donate" />
//     <input type="hidden" name="targets" value="транзакция {order_id}" />
//     <input type="hidden" name="sum" value={cost} data-type="number" />
//     <input type="hidden" name="comment" value="Хотелось бы получить дистанционное управление." />
//     <input type="hidden" name="need-fio" value="true" />
//     <input type="hidden" name="need-email" value="true" />
//     <input type="hidden" name="need-phone" value="false" />
//     <input type="hidden" name="need-address" value="false" />
//     <input type="hidden" checked name="paymentType" value="AC" />
// const body = {
//   'receiver'
//   'formcomment': {},
//   'short-dest': {},
//   'label': {},
//   'quickpay-form': {},
//   'targets': {},
//   'sum': {},
//   'comment': {},
//   'need-fio': {},
//   'need-email': {},
//   'need-phone': {},
//   'need-address': {},
//   'paymentType': {},
// }
// const result = await axios.post('');
// };
