import MainLayout from '@/layouts/MainLayout';

const TermsPage = () => {
  return (
    <MainLayout>
      <div className="text-white p-6 max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
        <p>
          By using UnderBelle, you agree to the following:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>UnderBelle is for anonymous and respectful messaging only.</li>
          <li>Do not use the platform to spread hate, threats, or illegal content.</li>
          <li>Your usage data may be stored and used to improve the service.</li>
          <li>You are responsible for the links and messages associated with your account.</li>
        </ul>
        <p>
          These terms may be updated at any time. Continued use of the platform implies acceptance of the latest terms.
        </p>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
