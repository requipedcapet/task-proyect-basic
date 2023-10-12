function LoadingTaskSkeleton() {
    return(
        <>
            <li className="task-card-steketon">
            <span className="task-state-skeleton"></span>
            <p className="task-info-skeleton"></p>
            <span className="task-delete-skeleton"></span>
            </li>
        </>
    );
}

export { LoadingTaskSkeleton };