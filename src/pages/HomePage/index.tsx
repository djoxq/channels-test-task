import React, {useEffect, useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/container';
import Table from '../../components/table';
import Hero from '../../components/hero';
import Input from '../../components/input';
import Button from '../../components/button';

interface University {
  id: number;
  name: string;
  country: string;
  web_pages: string[];
  alpha_two_code: string;
}

const HomePage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAlpha, setSortAlpha] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
        const data: University[] = await response.json();

        setUniversities(data.map((item, idx) => {
          return {
            ...item,
            id: idx + 1,
          }
        }));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSort = () => {
    setSortAlpha(!sortAlpha);
  };

  const columns = {
    name: {
      title: 'Name',
    },
    'state-province': {
      title: 'State'
    }
  };

  const items = useMemo(() => {
    const processedList = universities.filter(uni => {
      if (searchTerm) {
        return uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

    return sortAlpha ? processedList.sort((a, b) => a.name.localeCompare(b.name)) : processedList;
  }, [universities, searchTerm, sortAlpha]);

  const handleActionClick = (action: string, id: number) => {
    if (action === 'delete') {
      setDeletingId(id);

      setTimeout(() => {
        setUniversities(prevData => prevData.filter(d => d.id !== id));
        setDeletingId(null);
      }, 300);
    }
  };

  const handleRowClick = (university: University) => {
    navigate('/details', { state: { university } });
  };

  return (
    <Container>
      <Hero title="Universities in UAE" />
      <div className="filter-container">
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search universities"
        />
        <Button onClick={toggleSort} uiType={sortAlpha ? 'primary' : 'secondary'}>Sort</Button>
      </div>

      <Table
        deletingId={deletingId}
        data={items}
        columns={columns}
        actions={['delete']}
        onRowClick={handleRowClick}
        onActionClick={handleActionClick}
      />
    </Container>
  );
};

export default HomePage;
