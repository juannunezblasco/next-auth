import { SignOutForm } from "@/modules/auth/components/sign-out-form/sign-out-form";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className='text-4xl font-bold my-8'>DASHBOARD</h1> 
        <SignOutForm />
      </div>
    </main>
  );
}
