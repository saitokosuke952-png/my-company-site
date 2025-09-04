export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-4 max-w-md"
      >
        {/* Netlify用の隠しフィールド */}
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="お名前"
          required
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
          className="border p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="お問い合わせ内容"
          required
          className="border p-2 rounded h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          送信
        </button>
      </form>
    </main>
  );
}

