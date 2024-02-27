import CardForm from 'components/CardForm';

const Home = ({ onData }) => {
    const onSubmit = card => {
        onData(card);
    };
    return (
        <div>
            <CardForm onSubmit={onSubmit} />
        </div>
    );
};

export default Home;
