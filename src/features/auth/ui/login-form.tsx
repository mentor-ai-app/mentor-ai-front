import { LoginSchema, loginSchema, setAuthJWT } from "@/shared/auth";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { toRegister } from "@/shared/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useLogin } from "../hooks";

export const LoginForm = () => {
  const { mutateAsync, isPending } = useLogin();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    const res = await mutateAsync(data);
    setAuthJWT(res);
    form.reset();
  };

  return (
    <>
      <h4>Sign in</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            disabled={isPending}
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isPending}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button loading={isPending}>Login</Button>
        </form>
      </Form>
      <div>
        <Button asChild variant="link">
          <Link to={toRegister()}>Register</Link>
        </Button>
      </div>
    </>
  );
};
