import { AlertTriangle } from "lucide-react";

export default function PaymentWarning() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden border border-red-200">
        <div className="bg-red-600 p-4 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-white" />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Website Temporarily Suspended
          </h1>
          <div className="h-px bg-red-200 w-full mb-4"></div>
          <p className="text-gray-600 mb-4">
            This website has been temporarily suspended due to incomplete
            payment for development services.
          </p>
          <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700 text-sm mb-4">
            <p>
              The website owner has not completed payment for the development of
              this website. Service will resume once payment has been cleared.
            </p>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            If you are the website owner, please contact the development team to
            resolve this payment issue and restore your website.
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-center text-sm text-gray-600 border-t border-gray-200">
          This is a payment dispute between the website developer and website
          owner.
        </div>
      </div>
    </div>
  );
}
