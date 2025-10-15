import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-800 text-center">💚 About the Initiative</h1>
      <p className="mt-4 text-center text-gray-700 text-lg">Welcome to the Donation and Sell Drive — an eco-friendly campaign that combines environmental care with social good. Our goal is simple: to reduce waste, reuse valuable items, and help people in need. Instead of throwing away old belongings, we encourage you to donate or sell them at affordable prices, supporting sustainability and kindness at once.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-700">🌎 Why It Matters</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Reduce waste and pollution</li>
          <li>Save resources and energy</li>
          <li>Support underprivileged communities</li>
          <li>Promote a culture of reuse and sharing</li>
        </ul>
        <p className="mt-4 text-gray-600">Together, we can turn small actions into big environmental change.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-700">♻️ How It Works</h2>
        <ol className="mt-2 text-gray-600 list-decimal list-inside">
          <li><strong>Collect:</strong> Bring items you no longer need — clothes, stationery, books, or gadgets — to the collection center.</li>
          <li><strong>Sort:</strong> Our volunteers inspect and organize everything into two categories:
            <ul className="list-disc list-inside">
              <li>Donations → Given to those in need</li>
              <li>For Sale → Sold at minimal prices to raise environmental funds</li>
            </ul>
          </li>
          <li><strong>Distribute & Donate:</strong> Sale proceeds are donated to local NGOs or used for green causes like tree plantations, waste management, and environmental awareness programs.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-700">🌱 What You Can Donate</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Clothes & shoes</li>
          <li>Books & notebooks</li>
          <li>Stationery & school supplies</li>
          <li>Household items</li>
          <li>Electronic gadgets (in working condition)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-700">🌻 Impact</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>✅ Less waste → cleaner environment</li>
          <li>✅ More reuse → fewer resources consumed</li>
          <li>✅ More sharing → stronger communities</li>
        </ul>
        <p className="mt-4 text-gray-600">By participating, you’re contributing to a circular economy and helping make our planet greener.</p>
      </section>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-green-700">💬 Join the Movement</h2>
        <p className="mt-2 text-gray-600">Be part of something meaningful!</p>
        <p className="mt-2 text-gray-600">📍 Visit our collection point on campus or contact our team to schedule a drop-off.</p>
        <p className="mt-2 text-gray-600">💌 Together, let’s give old things a new life — and build a sustainable tomorrow.</p>
      </section>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-green-700">✨ Our Motto</h2>
        <p className="mt-2 text-gray-600">“Don’t Dump — Donate or Sell!”</p>
        <p className="mt-2 text-gray-600">Because every small act of care helps our planet breathe a little easier. 🌍💚</p>
      </section>
    </div>
  );
};

export default About;