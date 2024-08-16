export const Pricing = () => {
  return (
    <>
      <div className="p-4 bg-[#1e293b] text-white rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">API Pricing</h2>
        <p className="mb-4">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <div className="overflow-x-auto border border-[#2f3745] rounded-xl">
          <table className="w-full text-left border-collapse rounded-xl">
            <thead className="bg-[#4f46e5]">
              <tr>
                <th className="px-4 py-2">API</th>
                <th className="px-4 py-2">MODEL</th>
                <th className="px-4 py-2">PRICE PER 1K TOKENS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t border-gray-700">OpenAI</td>
                <td className="px-4 py-2 border-t border-gray-700">GPT-3.5</td>
                <td className="px-4 py-2 border-t border-gray-700">$0.002</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t border-gray-700">OpenAI</td>
                <td className="px-4 py-2 border-t border-gray-700">GPT-4</td>
                <td className="px-4 py-2 border-t border-gray-700">$0.03</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t border-gray-700">
                  Together AI
                </td>
                <td className="px-4 py-2 border-t border-gray-700">
                  Llama-2-70b
                </td>
                <td className="px-4 py-2 border-t border-gray-700">$0.0008</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t border-gray-700">
                  Together AI
                </td>
                <td className="px-4 py-2 border-t border-gray-700">
                  Llama-2-13b
                </td>
                <td className="px-4 py-2 border-t border-gray-700">$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Token Estimation</h3>
          <p className="mt-2">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Billing</h3>
          <p className="mt-2">
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
