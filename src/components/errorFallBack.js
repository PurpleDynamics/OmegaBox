const ErrorFallBack = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>에러가 발생했습니다</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>재시도</button>
        </div>
    );
};
export default ErrorFallBack;
