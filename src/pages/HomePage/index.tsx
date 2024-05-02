import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/container';
import Table from '../../components/table';
import Hero from '../../components/hero';
import Input from '../../components/input';
import {University, SortState, UniversityField} from '../../@types';

const HomePage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAlpha, setSortAlpha] = useState<SortState>(null);
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

  const columns = {
    name: {
      title: 'Name',
      sortable: true,
    },
    'state-province': {
      title: 'State'
    }
  };

  const items = useMemo(() => {
    const field: Omit<UniversityField, 'id' | 'web_pages'> = sortAlpha?.field;

    const processedList = universities.filter(uni => {
      if (searchTerm) {
        return uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

    if (field) {
      return processedList.sort(
        (a, b) => sortAlpha?.asc ? a[field]?.localeCompare(b[field]) : b[field]?.localeCompare(a[field])
      )
    }

    return processedList;
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

  const handleSort = (field: UniversityField) => {
    setSortAlpha(prevState => ({
      field,
      asc: prevState?.field === field ? !prevState.asc : true
    }) as SortState)
  }

  return (
    <Container>
      <Hero
        title="Universities in UAE"
        breadcrumb={[
          {
            label: 'Home',
            path: '/'
          }
        ]}
      />
      <div className="filter-container">
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search universities"
        />
      </div>

      <Table
        deletingId={deletingId}
        data={items}
        columns={columns}
        sortedColumns={sortAlpha}
        actions={['delete']}
        onSort={handleSort}
        onRowClick={handleRowClick}
        onActionClick={handleActionClick}
      />
    </Container>
  );
};

export default HomePage;
