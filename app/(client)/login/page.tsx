import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Login = () => {
    return (
        <div className="w-full h-max mt-[69px] p-[24px_0_50px_0] bg-[#f9f9f9]">
            <div className="w-full lg:w-[500px] h-max p-[32px] m-auto bg-white rounded-[8px] shadow-lg">
                <h5 className="w-full mt-[48px] text-lg font-medium leading-8 ">Xin chào bạn</h5>
                <h3 className="w-full m-[4px_0_32px] text-3xl font-medium leading-8 ">Đăng nhập tài khoản</h3>
                <form className="w-full h-max">
                    <div className="w-full h-[47px] relative">
                        <div className="absolute top-[50%] left-[10px] translate-y-[-50%] "><AiOutlineUser className="w-[24px] h-[24px]" /></div>
                        <Input type="text" placeholder="SĐT chính hoặc email" className="w-full h-full rounded-[8px] pl-[40px] focus-visible:ring-offset-0 focus-visible:ring-0 focus:border-slate-900" />
                    </div>
                    <div className="w-full h-[47px] m-[16px_0_24px] relative">
                        <div className="absolute top-[50%] left-[10px] translate-y-[-50%] "><BiLockAlt className="w-[24px] h-[24px]" /></div>
                        <Input type="password" placeholder="Mật khẩu" className="w-full h-full rounded-[8px] pl-[40px] focus-visible:ring-offset-0 focus-visible:ring-0 focus:border-slate-900" />
                    </div>
                    <Button type="submit" className="w-full h-[48px] bg-blue-500 rounded-[8px] hover:bg-[#ff837a] active:bg-[#74150f]">Đăng nhập</Button>
                </form>
            </div>
        </div>
    )
}

export default Login