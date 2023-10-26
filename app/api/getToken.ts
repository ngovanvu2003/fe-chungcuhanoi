const useGetToken = () => {
    const user = JSON.parse(localStorage.getItem("myacctoken") as string);
    const token = user?.token;
    return token;
}
export default useGetToken;