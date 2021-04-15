import { useFormState } from "../contact/useFormState";
import { useSendContactForm } from "../contact/useSendContactForm";
import { ContactParams } from "../types";

const Contact = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <div>
      <h2>お問い合わせ</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form method='post' onSubmit={handleSubmit}>
        <div className='field'>
          <label>お名前</label>
          <div>
            <input type='text' placeholder='お名前' name='name' onChange={handleChange} required />
          </div>
        </div>
        <div>
          <label>メールアドレス</label>
          <div>
            <input type='email' placeholder='メールアドレス' name='email' onChange={handleChange} required />
          </div>
        </div>
        <div>
          <label>お問い合わせ内容</label>
          <div>
            <textarea placeholder='Your Message' name='メッセージ' onChange={handleChange} required />
          </div>
        </div>
        <button type='submit'>お問い合わせをする</button>
      </form>
    </div>
  );
};

export default Contact;