const Simpson = ({simpson}) => {
    const {name, surname,phrase} = simpson;
    //або (тоді зверху в аргументі компоненти замість ({sippson}) пишемо (props)
    // const {sipsons:{name,surname,phrase}}=props
    return (
        <div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>phrase: "{phrase}"</div>
        </div>
    );
};

export {Simpson};